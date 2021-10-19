/*
Hey Jack. Keep your hands out of my stack.
*/

// String
let classname = "Pink Floyd Band Members";

// Number
let classSize = 5;

// Boolean
let isRetired = true;

// Array
let Members = [
  "Syd Barrett",
  "Roger Waters",
  "David Gilmour",
  "Nick Mason",
  "Richard Wright",
];

// Object
let band = {
  classname: "Pink Floyd Band Members",
  classSize: 5,
  isRetired: true,
  Members: [
    "Syd Barrett",
    "Roger Waters",
    "David Gilmour",
    "Nick Mason",
    "Richard Wright",
  ],
};

// Conditionals
let x = 1;
let y = 2;

if (x === y) {
  console.log("It is equal!");
} else if (x > y) {
  console.log("It is greater than.");
} else {
  console.log("No cases matched.");
}

// Functions

function singLyric(classname) {
  console.log(`I have a mouse whose getting rather old. ${classname}.`);
}

function multiply(x, y) {
  return x * y;
}

let product = multiply(2, 3);
