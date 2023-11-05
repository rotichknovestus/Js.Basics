
//1: What is the last value alerted by this code? Why?

let i = 3;
while (i) {
alert( i-- );
}

//* The last value alerted is 1 it's on a descending order

// 2: Which values does the while loop show?
// For every loop iteration, write down which value it outputs
// and then compare it with the solution.Both loops alert the same values, or not?

//!A: The prefix form ++i:
let ix = 0;
while ( ++ix < 5); 
alert( ix )

//*The value it outputs is 5

//!B: The postfix form i++

let il = 0;
while (il++ < 5) 
alert( il );

//*The value it outputs is 1 to 5

// 3: Which values get shown by the "for" loop?
// For each loop write down which values it is going to show. 
// Then compare with the answer. Both loops alert same values or not?

//!A: The postfix form:

for (let i = 0; i < 5; i++) 
alert( i );

//*The value it outputs is 0 to 4

//! B: The prefix form:

for (let i = 0; i < 5; ++i)
alert( i );

//*The value it outputs is 0 to 4


//4: Use the for loop to output even numbers from 2 to 10

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 5: Rewrite the code changing the for loop to while without altering
// its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}

let iy = 0;
while (iy < 3) {
alert( `number ${i}!` );
 iy++;
}



// 6: An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
//  P.S. The code should work for any n, not be hard-tuned for any fixed value.


