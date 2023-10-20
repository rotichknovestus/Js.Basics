// Programming with MOSH
// This is my first JavaScript lesson code

console.log("hello world It's me again the one and only developer Novestus");

// Naming cannot be reserved words i.e if,let...
// Naming should be meanngful words
// They cannot start with a number
// They cannot have a space or hyphen
// They are case-sensitive
let fname = "Novestus";
console.log(fname);

let interestRate = 0.3;

interestRate = 1;
console.log(interestRate);

// const cannot be changed

const intrestRate = 3;
console.log(interestRate);

let sirName = "Mosh"; // string literal
console.log(sirName);

let age = 30; // Number literal
console.log(age);

let isApproved = false; //Boolean literal
console.log(isApproved);

let firstName = undefined;
console.log(firstName);

let selectedColor = null;
console.log(selectedColor);

// in JavaScrip we have primitives/Value types and reference Types
// Primitives are: Strings,Number,Boolean,undefined,null
// Reference Types are: Objects, Arrays and Functions

// OBJECTS
let person = {
  firstName: 'Mosh',
  age: 30
};
// Dot Notation
person.firstName = 'Novestus';

// Brackect Notation
let selection = 'name'
person[selection] = 'Mercy';
console.log(person.name);

// ARRAYS

let selectedColors = ['red', 'blue'];
console.log(selectedColors);

let someColors = ['red','blue'];
someColors[2] = 'black';
console.log(someColors);

// FUNCTIONS
// function is a set of stetments that either perform a task or calculate and return a value.

// Performing a task
function greet(sirName, lastName){
  console.log('hello ' + name + '' + lastName);
}

greet('Novestus ', ' Kipkorir');

// Calculating a value

function square(number){
 return number * number;
}
console.log(square(3));
 //TechWorld with Nana

//Arrays and Objects
//syntax:
//Arrays [], objects {}, strings "", booleans false or true, numbers/integer '2'

nove = [
{outherName: "Kipkorir", ratings: "5", explanation: "good health"},
{firstrName: "Kipkorir", ratings: "5", explanation: "good health"},
{lasrtName: "Kipkorir", ratings: "5", explanation: "good health"}

]

console.log(nove);

// Comparison Operators
var son = 'Kipkoech';
 age = 30;
console.log(son + ' ' + age);