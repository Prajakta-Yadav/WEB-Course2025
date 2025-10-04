/**
 * In JavaScript, default parameters allow you to initialize function parameters with default values. 
 * These default values are used when no value or undefined is passed for a function argument. This feature was introduced in ES6 (ECMAScript 2015) to simplify the handling of missing or optional arguments. 
 */

function Start(act = "JavaScript") {

    console.log("Learning " + act);
    console.log("Starting JavaScript Learning");
}

Start(); //default value will be taken

//here we are passing the value to the function
Start("Python");

//here we are passing undefined to the function so it will take the default value
Start(undefined);

function add(num1 =10, num2=20){
    console.log(num1 + num2);

} add(4,9);
