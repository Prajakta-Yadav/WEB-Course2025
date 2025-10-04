/**
 * Function 
 * 1. Normal Function withb Function keyword
 * 2. Return, no return, with Parameter, no parameter
 * 3. Anonymous Function
 * 4. Arrow Function
 * 5. IIFE => Immediately Invoked Function Expression
 */

(function(){
    console.log("This is IIFE function");

})();            //IIFE function call. 


//IIFE function is Stored in variable. 
let sum = (function(a,b){
    return a+b;
})(10,20);

console.log(sum);

// IIFE function is we execute directly in print statement. 
console.log((function(a,b){
    return a+b;
})(20,20));