// *** PRINTING HELLO WORLD TO THE CONSOLE ***
console.log("Hello World");

// *** VARIABLES AND VALUES ***
let myName = "Mujaahid";
// Variable   // Value

/* >> Variable = We use variables to store values so they can be reused throughout the program.
>> Value = A value is a specific piece of data, such as a number, a character, or a Boolean, that can be stored in a variable. */
console.log(myName); // It will displa/print Mujaahid in the console inside the dev tools.

// A variable name can contain: Letters: a–z, A–Z, Digits: 0–9 (but not as the first character), Underscores: _, Dollar signs: $ other than that not allowed.

// Make your variables descriptive for ex
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher"; // this one is better and recommended.

let job1 = "Programmer";
let job2 = "Teacher"; // this is allowed but it's not a good practice and not descriptive.

// *** DATA TYPES *** //

/* Javascript has two types of data: Primiy=tive and non-primitive data type
>> primitives are: Numbers, String, Boolean, Undefined, Null, Symbol(ES2015) and BigInt(ES2020)
>> Non-primitive(reference): Objects, Array and Dates */
let age = 20; // Number. Note numbers are floating point numbers for ex 20 -> 20.0 even if we didn't add .0;
let myFirstName = "Mujaahid"; // String
let isMale = true; // Boolean
let job; // Undefined

// To check the type of data use typeof operator.
console.log(typeof age); // Answer == Number.

// Javascricpt has dynamic typing: This means we don't have to manually define the data type of the value stored in variable, instead data types are determined automatically. for ex

// let int score = 20; ❌ or let number age = 20; ❌ but let score = 20; 👍
// Also we can assign a new type of value to a variable that was already exist it doesn't matter whether it was Number or String for ex.
let population = 20;
population = "Twenty"; // First variable population we assigned a Number type then a String type this a part or example of dynamic typing.
