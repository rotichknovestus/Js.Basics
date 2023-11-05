/*
 Function ->>> is a sequence of profram instructions that perform a specific task.These functions are reusable 

 ********How do we declare/ Create functions**********
 For us to create a function we use the key word function to declare it.it looks as shown below:
       function  functionName(parameter1, parameter3,....ParameterN){
                 **body goes here*
                }
function ->>> Key word used to declre a function

functionName ->>> The function name is an identifier that uniquely identifies the function.

Parameters(inputs) ->>> Parameters are placeholders for values that the function expects to receive.They are enclosed in parentheses and separated by commas. Parameters are optional, and a function can havezero or more of them.

Body ->>> The function body is enclosed in curly braces {}. It contains the code that defines what the function does when it's called. The function body can include declarations,statements, expressions, and control flow.

Return ->>> The return statement specifies the value that the function should return when it's called.A function can return a single value. If a function doesn't
include a return statement, it implicitly returns undefined.
 */
let fName = "John";


function showMessage(){

    let message = "Hello " + fName;

    alert("Welcome to techSkills");

    alert(message);
}

showMessage();
function studentDetails(name, age){

    alert(name + ": " + age);
}


studentDetails("Novestus", " 50");
studentDetails("Robert ");


function greet(jina){
  return "Hello " + jina;
}
let salamu = greet("Jose");
alert(salamu);


function checkAge(age){
  if (age >= 20){
    return true;
  }else{
    return confirm('Do you have permission from your parent?');
  }
}

let age = prompt('How old are you?', 18);
if (checkAge(age)){
  alert('Access granted');
}else{
    alert('Access Denied')
  }

//!Js_Functions_Assignment

/*Question 1: Rewrite the function using '?' or '||'
The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result.*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

/*Rewrite it, to perform the same, but without if, in a single line.*/

//Make two variants of checkAge:
function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}


//Using a question mark operator ?
//Using OR ||
function checkAge(age) {
  return age > 18 || confirm('Did parents allow you?');
}



/*Question 2: Write a function min(a,b) which returns the least of two numbers a and b.
For instance:*/
function min(a,b){
  return a > b ? b : a;
}
console.log (min(2, 5));
console.log (min(3, -1));
console.log (min(1, 1));


/*Question 3: Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.*/

function pow(x,n){
  return x > n *
}
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

/*Create a web-page that prompts for x and n, and then shows the result of pow(x,n).*/
