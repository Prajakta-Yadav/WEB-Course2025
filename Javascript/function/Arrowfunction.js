/**
 * Function 
 * 1. Normal Function withb Function keyword
 * 2. Return, no return, with Parameter, no parameter
 * 3. Anonymous Function
 * 4. Arroe Function
 * 5. IIFE => Immediately Invoked Function Expression
 */

function normalFun(){
    console.log("This is Normal Function");

}
let arrowFun = () => console.log("This is Arrow function");

normalFun();

arrowFun();

let sum = (a,b) => a+b;

console.log(sum(12345, 1234));

// with return 

function addition(a,b){
    return a + b;
}

console.log(addition(30,40));
