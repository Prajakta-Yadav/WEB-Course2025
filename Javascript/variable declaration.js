/*
let 

Block-scoped (only available within the {} block it’s declared in).

Can be updated, but not redeclared in the same scope.

Also hoisted, but not initialized (temporal dead zone until declared).
 */

let num = 100;
console.log(num);

num = 500;
console.log(num);

/**
 * const
Block-scoped (only available within the {} block it’s declared in). 
Cannot be updated or redeclared in the same scope.
Also hoisted, but not initialized (temporal dead zone until declared).  
 */

const num1 = 200;
console.log(num1);
//num1 = 300;
//console.log(num1);

/**
 * var
Function-scoped (available throughout the function it’s declared in).
Can be updated and redeclared in the same scope.
Hoisted and initialized to undefined.   
 */

var num2 = 300;
console.log(num2);  

num2 = 400;
console.log(num2);

/*
let num2 = 400; // This will throw an error because 'num2' has already been declared with 'var'
console.log(num2);

var num1 = 500; // This will not throw an error, but it's not recommended to redeclare variables with 'var'
console.log(num1);

const num = 600; // This will throw an error because 'num' has already been declared with 'let'
console.log(num); 

const num1 = 700; // This will throw an error because 'num1' has already been declared with 'const' 
console.log(num1);

*/ 
