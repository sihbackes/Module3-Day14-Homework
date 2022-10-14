// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
console.log("\n------------------------EXERCISE 21 -------------------------");

let x = "Jhon";
let space = " <> ";
let y = "Doe";
console.log(x + space + y);

// 22) Create an object with properties such name, surname, email
console.log("\n------------------------EXERCISE 22 -------------------------");

let personal = {
  name: "Simone",
  surnane: "Backes",
  email: "simonebackesv@gmail.com",
};
console.log(personal);
// 23) Delete the email property from the previously created object
console.log("\n------------------------EXERCISE 23 -------------------------");

delete personal.email;
console.log(personal);
// 24) Create an array with 10 strings in it
console.log("\n------------------------EXERCISE 24 -------------------------");

let colors = [
  "red",
  "blue",
  "green",
  "grey",
  "white",
  "black",
  "pink",
  "purple",
  "yellow",
  "orange",
];
// 25) Print in the console every string from the previous array
console.log("\n------------------------EXERCISE 25 -------------------------");

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 26) Create an array with 100 random numbers in it
console.log("\n------------------------EXERCISE 25 -------------------------");

let numbersArray = [];
for (let i = 0; i < 100; i++) {
  numbersArray.push(Math.floor(Math.random() * 100) + 1);
}
console.log(numbersArray);

// 27) Write a function to get the maximum and minimum values from the previously created array
console.log("\n------------------------EXERCISE 27 -------------------------");

function maxAndMinValue(array) {
  let maxValue = Math.max(...array);
  let minValue = Math.min(...array);
  return `The highest value is ${maxValue} and the lower value is ${minValue}`;
}
console.log(maxAndMinValue(numbersArray));

// 28) Create an array of arrays, in which every array has 10 random numbers
console.log("\n------------------------EXERCISE 28 -------------------------");

let arrayOfArrays = [];
let arrayOne = [];
let arrayTwo = [];
for (let i = 0; i < 10; i++) {
  arrayOne.push(Math.floor(Math.random() * 10) + 1);
  arrayTwo.push(Math.floor(Math.random() * 10) + 1);
}
arrayOfArrays.push(arrayOne, arrayTwo);
console.log(arrayOfArrays);

// 29) Create a function that gets 2 arrays as parameters and returns the longest one
console.log("\n------------------------EXERCISE 29 -------------------------");

function compareArrays(array1, array2) {
  if (array1.length > array2.length) {
    return ` The longest array is ${array1}`;
  } else if (array1.length < array2.length) {
    return ` The longest array is ${array2}`;
  } else if (array1.length === array2.length) {
    return `These arrays have the same length.`;
  }
}

console.log(compareArrays(arrayOne, arrayTwo));
console.log(compareArrays(arrayOne, numbersArray));

// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
console.log("\n------------------------EXERCISE 30 -------------------------");

function compareSumOfArrays(array1, array2) {
  let sumArray1 = 0;
  let sumArray2 = 0;
  for (let i = 0; i < array1.length; i++) {
    sumArray1 += array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    sumArray2 += array2[i];
  }

  if (sumArray1 > sumArray2) {
    return `The higher sum of values is on the first array ${sumArray1}`;
  } else if (sumArray1 < sumArray2) {
    return `The higher sum of values is on the second array ${sumArray2}`;
  } else if (sumArray1 === sumArray2) {
    return `These arrays have the same sum.`;
  }
}

let randomArray1 = [1, 2, 3];
let randomArray2 = [3, 2, 1];

console.log(compareSumOfArrays(arrayOne, arrayTwo));
console.log(compareSumOfArrays(arrayOne, numbersArray));
console.log(compareSumOfArrays(randomArray1, randomArray2));

// DOM EXERCISES

// 31) Get the element with an id of "container" from the page
console.log("\n------------------------EXERCISE 31 -------------------------");
// 32) Get every <td> element from the page
// 33) Use a loop for printing the text inside of every <td> element in the page
// 34) Write a function to change the heading of the page
// 35) Write a function to add an extra row to the table
// // 36) Write a function to add a class of "test" to each row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a unordered list
// 40) Write a function to empty a list
