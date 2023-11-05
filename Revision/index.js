//*if statment

let age = 16;
if( age >= 16){
console.log('She is a girl');
}

let house = 4;
if(house <=3){
  console.log('for sell');
}
else{
  console.log('Not for sell')
}

let car = 12;
if( car < 5){
console.log('free shipping');
}else if(car < 10){
  console.log('there\'s a tax in btwn');
}else{
  console.log('full tax');
}


// //*What is the last value alerted by this code? Why?

let i = 3;
while (i) {
alert( i-- );
}

/*Which values does the while loop show?
For every loop iteration, write down which value it outputs
and then compare it with the solution.Both loops alert the values, or not?*/

// The prefix form ++i:

let i = 0;
while (++i < 5) 
// alert( i );
console.log(i);

//The postfix form i++

let i3 = 0;
while (i3++ < 5) 
// alert( i3 );
console.log(i3);



