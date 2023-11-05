let a = 3;
let b = 3;
results = a + b; //!adding 2 variables

console.log(results);

document.write("<h1>Results is: "+results+" </h1>");


let isStudent = 'Novestues';

console.log(isStudent);

let age = '20';
console.log(age)

document.write("<h1>Results age is: "+age+" </h1>");




// //*In JavaScript, = take right to left in that all the values in lest are asigned to variable on the left.
// //* while in + sign it take left to right in that JavaScript do sum from left heading to right. 

//!Calculator Script here.

const display = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') {   
      display.innerText = '';
    } else if (item.id == 'backspace') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    }else if (display.innerText != '' && item.id == 'equal') {
      display.innerText = eval(display.innerText);
    }else if (display.innerText == '' && item.id == 'equal') {
      display.innerText = 'Empty!';
      setTimeout(() => (display.innerText = ''), 2000);
    }else{
      display.innerText += item.id;
    }
  }
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle('dark');
  themeToggleBtn.classList.toggle('active');
  isDark = !isDark;
}