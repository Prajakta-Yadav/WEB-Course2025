/**
 * Callback Function
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. 

They enable asynchronous programming (like working with APIs or file systems).

They help create modular and maintainable code.

They're often used in event handling, timers, and functional programming.

callback is a parameter in the calculator function. It's not a specific function yet—it's just a placeholder for a function that will be passed in when calculator() is called.

Inside the calculator function, the line callback(); calls the function passed as callback.

Example:

If you call calculator(add), the function add is passed as the callback, so callback() becomes add() inside the function body, and the add function gets executed.

 */

function add() {
    console.log("Addition:", 5 + 3);
}   

function subtract() {
    console.log("Subtraction:", 5 - 3);
}   
function multiply() {
    console.log("Multiplication:", 5 * 3);
}   
function divide() {
    console.log("Division:", 5 / 3);
}   
function calculator(callback) {
    callback();
}
calculator(add);
calculator(subtract);
calculator(multiply);
calculator(divide);


